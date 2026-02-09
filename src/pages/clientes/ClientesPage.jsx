import { getClientes, deleteCliente } from '../../services/clienteService';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ClientesPage = () => {
    const [clientes, setClientes] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const fetchClientes = async () => {
        try {
            setLoading(true);
            const response = await getClientes();
            setClientes(response.data);
        } catch (error) {
            console.error('Error fetching clientes:', error);
        } finally {
            setLoading(false);
        }
    };


    const handleDelete = async (id) => {
        const confirmed = window.confirm('¿Estás seguro de que quieres eliminar este cliente?');
        if (!confirmed) return;
        try {
            await deleteCliente(id);
            fetchClientes();
        } catch (error) {
            console.error('Error deleting cliente:', error);
        }
    };


    useEffect(() => {
        fetchClientes();
    }, []);


    if (loading) {
        return <div>Cargando clientes...</div>;
    }
    return (
        <div>
            <h1>Lista de Clientes</h1>
            <button onClick={fetchClientes}>Refrescar</button>
            <button onClick={() => navigate('/clientes/create')}>Agregar Cliente</button><br/>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Email</th>
                        <th>Teléfono</th>
                        <th>Dirección</th>
                        <th>Ciudad</th>
                    </tr>
                </thead>
                <tbody>
                    {clientes.map((cliente) => (
                        <tr key={cliente.id}>
                            <td>{cliente.id}</td>
                            <td>{cliente.nombre}</td>
                            <td>{cliente.apellido}</td>
                            <td>{cliente.email}</td>
                            <td>{cliente.telefono}</td>
                            <td>{cliente.direccion}</td>
                            <td>{cliente.ciudad}</td>
                            <td>
                                <button onClick={() => window.location.href = `/clientes/edit/${cliente.id}`}>Editar</button>
                                <button onClick={() => handleDelete(cliente.id)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default ClientesPage;
