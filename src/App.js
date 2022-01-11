import ParticlesBg from "particles-bg";
import './App.css';
import { BsInstagram } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';
import { FaTiktok } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import Typical from 'react-typical'

function App() {
  return (
    <div>
     <div className="card">
       <div className="card_body">
        <div className="profile text-center">
          <img src="https://avatars.githubusercontent.com/u/49564359?s=400&u=bbf789cc36755075e1b88079716157a2c70db7c6&v=4" className="avatar"/>
          <h1>Rustam</h1>
              <Typical
            steps={['Junior', 1000, 'Junior Web Developer | Junior Android Developer | Grapich Desain', 500]}
            loop={Infinity}
            wrapper="p"
          />
        <div className="mt-16">
          <a className="btn_action bg_content" href="https://www.instagram.com/rustam1255/">
          <BsInstagram />
            <span>Instagram</span>
          </a>
        </div>
        <div className="mt-16">
          <a className="btn_action bg_content" href="https://web.facebook.com/rustam.otomotif">
          <BsFacebook />
          <span>Facebook</span>
          </a>
        </div>
        <div className="mt-16">
          <a className="btn_action bg_content" href="https://www.youtube.com/channel/UCxCWXdEHl5E30Vqbt6_LkjA">
          <BsYoutube />
          <span>Youtube</span>
          </a>
        </div>
        <div className="mt-16">
          <a className="btn_action bg_content" href="https://www.tiktok.com/@omdroid7">
          <FaTiktok />
          <span>Tiktok</span>
          </a>
        </div>
        <div className="mt-16">
          <a className="btn_action bg_content" href="https://github.com/rustam76">
          <BsGithub />
          <span>Github</span>
          </a>
        </div>
        <p>Terima Jasa Pembuatan Website dan Aplikasi Mobile</p>
      </div>
       </div>
     </div>
     <ParticlesBg type="thick" bg={true} />
    </div>
  );
}

export default App;
