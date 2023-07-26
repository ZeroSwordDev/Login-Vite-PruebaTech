import image  from '../src/assets/LOGO.png'
import image2  from '../src/assets/user.png'
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <img
            src={image}
            alt=""
            className="image-ccu-absolute"
          />
          <div className="left">
            <div className="text-container">
              <h1 className="text-login">Login</h1>
              <h3 className="text-gestion">Gestión</h3>
              <p className="text-inventario">Inventario</p>
            </div>
            <div className="image-container-user">
              <img src={image2} alt="" className="image-user" />
            </div>
          </div>
          <div className="right">
            <div className="container-form">
              <div className="User">
                <div className="user-label">
                  <label className="" htmlFor="user">
                    Nombre de usuario
                  </label>
                </div>
                <input
                  className="input-user"
                  id="user"
                  type="text"
                  placeholder="ej: Jhon"
                />
              </div>

              <div className="password">
                <div className="password-label">
                  <label htmlFor="">Password</label>
                </div>

                <input
                  className="input-password"
                  type="text"
                  placeholder="****"
                />
              </div>
              <div className="password-record">
                <a href="#">He olvidado mi contraseña</a>
              </div>
              <div className="container-buttom-form">
                <button className="buttom-signIn">Iniciar session</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
