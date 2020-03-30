import React, { useState } from 'react';

import api from '../../Services/api';

import {FiArrowLeft} from 'react-icons/fi';
import {Link, useHistory} from 'react-router-dom';
import logoImg from '../../assets/logo.svg';

import './styles.css';

export default function NewIncident(){

    const [title,setTitle] = useState('')
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const history = useHistory();

    const ongId = localStorage.getItem('ongId');

   async function handleNewIncident(e){
        e.preventDefault();
        
        const data={
            title,
            description,
            value,
        }

        try {
            await api.post('incidents',data,{
                headers:{
                    Authorization : ongId,
                }
            })            
            history.push('/profile');
        } catch (error) {
            alert('Erro ao cadastrar caso, tente novamente');
        }
    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"></img>
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar para home
                    </Link>
                </section>

                <form onSubmit={handleNewIncident}>
                    <input type="text" 
                    placeholder="Título do caso"
                    value={title} 
                    onChange={e => {setTitle(e.target.value)}}/>
                    <textarea 
                    placeholder="descrição"
                    value={description} 
                    onChange={e => setDescription(e.target.value)}/>
                    <input type="text" 
                    placeholder="Valor em reais"
                    value={value}
                    onChange={e => setValue(e.target.value)}/>

                    <button className="button" Type="submit"> Cadastrar </button>
                </form>
            </div>
        </div>
    )
}