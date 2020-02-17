import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ changeCategory }) => {

    const handleChangeCategory = e => (
        changeCategory(e.target.value)
    );

    return (
        <div className="buscador row">
            <div className="col s12 m8 offset-m2">
                <form action="">
                    <h2>Categoria</h2>
                    <div className="input-field col s12 m8 offset-m2">
                        <select name="" id="" onChange={handleChangeCategory}>
                            <option value="general">General</option>
                            <option value="business">Negocios</option>
                            <option value="technology">Tegnologia</option>
                            <option value="science">Ciencias</option>
                            <option value="sports">Deportes</option>
                            <option value="entertainment">Entretenimiento</option>
                            <option value="health">Salud</option>
                        </select>
                    </div>
                </form>
            </div>
        </div>
    );
};

Form.propTypes = {
    changeCategory: PropTypes.func.isRequired,
};

export default Form;