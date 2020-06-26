import React from 'react'
import './AuthPage.css'

const AuthPage = () => {
    return (
        <div className="suka">
            <div className=" d-flex h-100">
                <form className="form-signin row justify-content-center align-items-center" >
                    <h1 className="h3 mb-3 font-weight-normal">Авторизация</h1>
                    <label htmlFor="inputEmail" className="sr-only">Email</label>
                    <input 
                        type="email" 
                        id="inputEmail" 
                        className="form-control" 
                        placeholder="Введите Email адрес" 
                        required 
                    />
                    <label htmlFor="inputPassword" className="sr-only">Пароль</label>
                    <input 
                        type="password" 
                        id="inputPassword" 
                        className="form-control" 
                        placeholder="Введите пароль" 
                        required 
                    />
                    <div className="checkbox mb-3">
                        <label>
                            <input 
                                type="checkbox" 
                                value="remember-me" 
                            /> Запомнить меня
                        </label>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Авторизоваться</button>
                    <small >Нет аккаунта?</small>
                    <button className="btn btn-lg btn-light btn-block">Зарегистрироваться</button>
                    <p className="mt-5 mb-3 text-muted">&copy; 2020</p>
                </form>
            </div>
        </div>
    )
}

export default AuthPage