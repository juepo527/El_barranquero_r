import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react'
import Axios from 'axios'
import Swal from 'sweetalert2';
import './admin.css'
import { Link, Outlet } from 'react-router-dom';

function Admin() {

  const [pedidos, setPedidos] = useState([])
  const [domicilios, setDomicilios] = useState([])
  const [contabilidad, setContabilidad] = useState([])
  const [egresos, setEgresos] = useState(0)

  const datosContabilidad = () => {
    Axios.get('http://localhost:3001/admin/contabilidad').then((response) => {
      setContabilidad(response.data)
    })
  }

  const sumarTotal = (ingresos) => {
    Axios.put('http://localhost:3001/admin/updateIng', {
      ingresos: ingresos
    }).then(() => {
      traerDatos()
    })
  }

  const eliminarIngresos = () => {
    Swal.fire({
      title: 'Estás seguro?',
      html: '<i>No podrás recuperar los datos de las ganancias después de reiniciarlas</i>',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, entregar'
    }).then((result) => {
      if (result.isConfirmed) {
        Axios.put('http://localhost:3001/admin/deleteIng',).then(() => {
          traerDatos()
          Swal.fire({
            title: 'Eliminado',
            text: 'El registro ha sido eliminado',
            icon: 'success',
            timer: 3000
          });
        }).catch(function (error) {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'No se ha podido eliminar el registro',
            footer: error.AxiosError
          })
        })
      }
    });
  }

  const agregarEgresos = () => {
    Axios.put('http://localhost:3001/admin/updateEgr', {
      egresos: egresos
    }).then(() => {
      Swal.fire({
        title: 'Se han subido los datos con éxito',
        icon: 'success'
      })
      traerDatos()
    })
  }

  const eliminarEgresos = () => {
    Swal.fire({
      title: 'Estás seguro?',
      html: '<i>No podrás recuperar los datos de los egresos después de reiniciarlas</i>',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, entregar'
    }).then((result) => {
      if (result.isConfirmed) {
        Axios.put('http://localhost:3001/admin/deleteEgr',).then(() => {
          traerDatos()
          Swal.fire({
            title: 'Eliminado',
            text: 'El registro ha sido eliminado',
            icon: 'success',
            timer: 3000
          });
        }).catch(function (error) {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'No se ha podido eliminar el registro',
            footer: error.AxiosError
          })
        })
      }
    });
  }

  const datosPedidos = () => {
    Axios.get('http://localhost:3001/admin/pedido',).then((response) => {
      setPedidos(response.data)
    })
  }

  const eliminarPedido = (val) => {
    Swal.fire({
      title: 'Estás seguro?',
      html: '<i>No podrás recuperar los datos del pedido después de eentregarlo</i>',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, entregar'
    }).then((result) => {
      if (result.isConfirmed) {
        Axios.delete(`http://localhost:3001/admin/domicilio/delete/${val.id_pedido}`).then(() => {
          traerDatos();
          sumarTotal(val.total)
          Swal.fire({
            title: 'Entregado',
            text: 'El pedido fue entregado',
            icon: 'success',
            timer: 3000
          });
        }).catch(function (error) {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'No se ha podido eliminar el registro',
            footer: error.AxiosError
          })
        })
      }
    });
    traerDatos()
  }

  const datosDomicilio = () => {
    Axios.get('http://localhost:3001/admin/domicilio',).then((response) => {
      setDomicilios(response.data)
    })
  }

  const eliminarDomicilio = (val) => {
    Swal.fire({
      title: 'Estás seguro?',
      html: '<i>No podrás recuperar los datos del domicilio después de enviarlo</i>',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        Axios.delete(`http://localhost:3001/admin/domicilio/delete/${val.id_pedido}`).then(() => {
          sumarTotal(val.total)
          traerDatos();
          Swal.fire({
            title: 'Entregado',
            text: 'El pedido fue entregado',
            icon: 'success',
            timer: 3000
          });
        }).catch(function (error) {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'No se ha podido eliminar el registro',
            footer: error.AxiosError
          })
        })
      }
    });
    traerDatos()
  }

  const traerDatos = () => {
    datosPedidos()
    datosDomicilio()
    datosContabilidad()
  }

  traerDatos()

  return (
    <div>
      <div className='general_admin'>
        <div className='izquierda'>
          <div className='pedido'>
            {pedidos.length > 0 ?
              pedidos.map((producto) => {
                return <div className='celdaPedido'>
                  <h1 style={{ color: '#A05344' }}>Pedidos: </h1>
                  <h3>{producto.id_platos}</h3>
                  <h3>Cédula cliente: {producto.cedula_cliente}</h3>
                  <h2>Total: {producto.total}$</h2>
                  <button className='btn btn-primary' onClick={() => {
                    eliminarPedido(producto)
                  }}>Enviado</button>
                </div>
              })
              : <h2 style={{ color: 'red' }}>No hay pedidos en espera</h2>
            }
          </div>
          <div className='reserva_contenedor'>Reservas</div>
        </div>
        <div className='derecha'>
          <div className='derecha_arriba'>
            <div className='ingresos'><h3>Ingresos:</h3>{contabilidad.map((producto) => {
              return <div key={producto.id_contabilidad}>
                <h2>{producto.ingresos}</h2>
              </div>
            })}
              <button className='btn btn-danger' onClick={() => {
                eliminarIngresos()
              }}>Reiniciar ingresos</button>
            </div>
            <div className='egresos'>
              <h3>Egresos: </h3>{contabilidad.map((producto) => {
                return <div>
                  <h2>{producto.egresos}</h2>
                </div>
              })}
              <h4>Digite los egresos: (Se sumarán con los anteriores registros)</h4>
              <div className='cosito'>
                <input type='number' onChange={(e) => {
                  setEgresos(e.target.value)
                }} /> <button className='btn btn-success botoncito' onClick={() => {
                  agregarEgresos()
                }}>Subir</button> </div>
              <button className='btn btn-danger' onClick={() => {
                eliminarEgresos()
              }}>Reiniciar egresos</button>
            </div>
            <div className='ganancias'>
              <h3>Ganancias: </h3>{contabilidad.map((producto) => {
                return <div key={producto.id_contabilidad}>
                  <h2>{producto.ingresos - producto.egresos}</h2>
                </div>
              })}
            </div>
          </div>
          <div className='derecha_abajo'>
            <div className='mesas'>Mesas</div>
            <div className='domicilios'>
              {domicilios.length > 0 ?
                domicilios.map((producto) => {
                  return <div className='celdaPedido' key={producto.id_pedido}>
                    <h1 style={{ color: '#A05344' }}>Domicilio:</h1>
                    <h3>{producto.id_platos}</h3>
                    <h3>Cédula cliente: {producto.cedula_cliente}</h3>
                    <h2>Total: {producto.total}$</h2>
                    <h2>Dirección: {producto.direccion}</h2>
                    <button className='btn btn-primary' onClick={() => {
                      eliminarDomicilio(producto)
                      sumarTotal(producto.total)
                    }}>Entregado</button>
                  </div>
                })
                : <h2 style={{ color: 'red' }}>No hay domicilios en espera</h2>
              }
            </div>
          </div>
        </div>
      </div>
      <Link to='/editarMenu'><button className='botoncito'>Editar Menu</button></Link>
      <Outlet />
    </div>
  )
}

export default Admin