import SpotifyNameLogoGreen from "../Images/SpotifyLogo";
import { loginUrl } from "../Api/spotifyApi";
import styles from "../../styles/login.module.css";

export default function Login() {
  return (
    <div className={styles.login}>
      <div className="mt-20"></div>
      <SpotifyNameLogoGreen height={200} width={400} />
      <a aria-label="login button" className={styles.login__a} href={loginUrl}>
        LOG IN WITH SPOTIFY
      </a>
    </div>
  );
}
