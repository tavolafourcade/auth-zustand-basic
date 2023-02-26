import { loginRequest, profileRequest } from "../api/auth"
import {useAuthStore} from "../store/auth"

const LoginPage = () => {

  const setToken = useAuthStore(state => state.setToken)
  const setProfile = useAuthStore(store => store.setProfile)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const email = (e.currentTarget[0] as HTMLInputElement).value
    const password = (e.currentTarget[1] as HTMLInputElement).value

    const resLogin = await loginRequest(email, password)

    // Guardando el token recibido del backend
    setToken(resLogin.data.token)

    const profileRes = await profileRequest()
    setProfile(profileRes.data.profile)
  }

  
  return (
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="email@mail.com"/>
      <input type="password" placeholder="******"/>
      <button>
        Login
      </button>
    </form>
  )
}
export default LoginPage