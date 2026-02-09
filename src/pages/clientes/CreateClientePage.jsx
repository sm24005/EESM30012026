import { createCliente } from '../../services/clienteService';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const CreateClientePage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        direccion: '',
        ciudad: ''
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createCliente(formData);
            navigate('/clientes');
        } catch (error) {
            console.error('Error creating cliente:', error);
        }
    }
    return (
        <div>
            <h1>Crear Nuevo Cliente</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre:</label>
                    <input
                        type="text"
                        value={formData.nombre}
                        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                        required
                    />
                </div>
                <div>
                    <label>Apellido:</label>
                    <input
                        type="text"
                        value={formData.apellido}
                        onChange={(e) => setFormData({ ...formData, apellido: e.target.value })}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="text"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                    />
                </div>
                <div>
                    <label>Teléfono:</label>
                    <input
                        type="text"
                        value={formData.telefono}
                        onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                        required
                    />
                </div>
                <div>
                    <label>Dirección:</label>
                    <input
                        type="text"
                        value={formData.direccion}
                        onChange={(e) => setFormData({ ...formData, direccion: e.target.value })}
                        required
                    />
                </div>
                <div>
                    <label>Ciudad:</label>
                    <input
                        type="text"
                        value={formData.ciudad}
                        onChange={(e) => setFormData({ ...formData, ciudad: e.target.value })}
                        required
                    />
                </div>
                <button type="submit">Crear Cliente</button>
                <button type="button" onClick={() => navigate('/clientes')}>Cancelar</button>
            </form>
        </div>
    );
}
export default CreateClientePage;