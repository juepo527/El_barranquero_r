import { useEffect, useState } from 'react'
import Axios from 'axios';
import Swal from 'sweetalert2';

function Edit_menu() {
    const [id_plato, setId] = useState()
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [ingredientes, setIngredientes] = useState('');
    const [precio, setPrecio] = useState();
    const [imagen, setImagen] = useState("");
    const [categoria, setCategoria] = useState("");
    const [dia, setDia] = useState("");
    const [menu, setMenu] = useState([]);
    const [editar, setEditar] = useState(false);
    const [loading, setLoading] = useState(false);

    const uploadImage = async (e) => {
        const files = e.target.files;
        const data = new FormData();
        data.append("file", files[0]);
        data.append("upload_preset", "el_barranquero");
        setLoading(true);
        const res = await fetch(
            "https://api.cloudinary.com/v1_1/dwjwb4mza/image/upload",
            {
                method: "POST",
                body: data,
            }
        )
        const file = await res.json();
        setImagen(file.secure_url)
        console.log(file.secure_url)
        setLoading(false)
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: 'La imagen se subió con éxito'
          })
    }

    const add = () => {
        Axios.post('http://localhost:3001/editarMenu/create', {
            nombre: nombre,
            descripcion: descripcion,
            ingredientes: ingredientes,
            precio: precio,
            categoria: categoria,
            dia: dia,
            imagen: imagen
        }).then(() => {
            getMenu();
            limpiar();
            Swal.fire({
                title: '<strong>Registro exitoso</strong>',
                html: '<i>El empleado <strong>' + nombre + '</strong> fue registrado con éxito</i>',
                icon: 'success',
                timer: 3000
            })
        });
    }

    const update = () => {
        Axios.put('http://localhost:3001/editarMenu/update', {
            id_plato: id_plato,
            nombre: nombre,
            descripcion: descripcion,
            ingredientes: ingredientes,
            precio: precio,
            categoria: categoria,
            dia: dia,
            imagen: imagen
        }).then(() => {
            getMenu();
            limpiar();
            Swal.fire({
                title: '<strong>Actualización exitosa</strong>',
                html: '<i>El empleado <strong>' + nombre + '</strong> fue actualizado con éxito</i>',
                icon: 'success',
                timer: 3000
            })
        });
    }

    const eliminar = (val) => {
        Swal.fire({
            title: 'Estás seguro?',
            html: '<i>No podrás recuperar los datos de <strong>' + val.nombre + '</strong> después de eliminarlo</i>',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar'
        }).then((result) => {
            if (result.isConfirmed) {
                Axios.delete(`http://localhost:3001/editarMenu/delete/${val.id_plato}`).then(() => {
                    getMenu();
                    limpiar();
                    Swal.fire({
                        title: 'Eliminado',
                        text: val.nombre + ' fue eliminado',
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

    const limpiar = () => {
        setNombre('');
        setDescripcion('');
        setIngredientes('');
        setPrecio('');
        setId('');
        setCategoria("");
        setDia("");
        setImagen("");
        setEditar(false);
    }

    const editarDatos = (val) => {
        setEditar(true);
        setNombre(val.nombre);
        setDescripcion(val.descripcion);
        setIngredientes(val.ingredientes);
        setPrecio(val.precio);
        setCategoria(val.categoria);
        setDia(val.dia);
        setId(val.id_plato);
    }


    const getMenu = () => {
        Axios.get('http://localhost:3001/editarMenu',).then((response) => {
            setMenu(response.data);
        });
    }

    getMenu()

    return (
        <div>
            <div className="card text-center">
                <div className="card-header">
                    Editar menú
                </div>
                <form className="card-body" encType='multipart/form-data'>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Nombre: </span>
                        <input type="text"
                            onChange={(event) => {
                                setNombre(event.target.value);
                            }}
                            className="form-control" value={nombre} placeholder="Ingrese el nombre" aria-label="Nombre" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Descripcion: </span>
                        <input type="text"
                            onChange={(event) => {
                                setDescripcion(event.target.value);
                            }}
                            className="form-control" value={descripcion} placeholder="Ingrese la edad" aria-label="edad" aria-describedby="basic-addon1" />
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Ingredientes: </span>
                        <input type="text"
                            onChange={(event) => {
                                setIngredientes(event.target.value);
                            }}
                            className="form-control" value={ingredientes} placeholder="Ingrese el país" aria-label="pais" aria-describedby="basic-addon1" />
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Precio: </span>
                        <input type="text"
                            onChange={(event) => {
                                setPrecio(event.target.value);
                            }}
                            className="form-control" value={precio} placeholder="Ingrese el cargo" aria-label="cargo" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Categoria</span>
                        <input type="text"
                            onChange={(event) => {
                                setCategoria(event.target.value);
                            }}
                            className="form-control" value={categoria} placeholder="Ingrese el cargo" aria-label="cargo" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Ingrese el dia (menu del día)</span>
                        <input type="text"
                            onChange={(event) => {
                                setDia(event.target.value);
                            }}
                            className="form-control" value={dia} placeholder="Ingrese el cargo" aria-label="cargo" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Imagen: </span>
                        <input type="file"
                            onChange={uploadImage}
                            className="form-control" placeholder="Ingrese el cargo" aria-label="basic-addon1" aria-describedby="basic-addon1" />
                    </div>
                </form>
                <div className="card-footer text-body-secondary">
                    {
                        editar === true ?
                            <div>
                                <button onClick={update} className='btn btn-warning mr-4'>Actualizar</button> <button onClick={limpiar} className='btn btn-danger'>Cancelar</button>
                            </div>
                            : <button onClick={add} className='btn btn-success'>Registrar</button>
                    }
                </div>
            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Descripcion</th>
                        <th scope="col">Ingredientes</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Categoria</th>
                        <th scope="col">Dia</th>
                        <th scope="col">Imagen</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        menu.map((val, key) => {
                            return <tr key={val.id_plato}>
                                <th>{val.id_plato}</th>
                                <td>{val.nombre}</td>
                                <td>{val.descripcion}</td>
                                <td>{val.ingredientes}</td>
                                <td>{val.precio}</td>
                                <td>{val.categoria}</td>
                                <td>{val.dia}</td>
                                <td><img src={val.imagen}></img></td>
                                <td>
                                    <div className="btn-group" role="group" aria-label="Basic example">
                                        <button type="button" className="btn btn-info"
                                            onClick={() => {
                                                editarDatos(val);
                                            }
                                            }
                                        >Editar</button>
                                        <button type="button"
                                            onClick={() => {
                                                eliminar(val);
                                            }}
                                            className="btn btn-danger">Eliminar</button>
                                    </div>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Edit_menu;