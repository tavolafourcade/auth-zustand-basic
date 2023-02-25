import { loginRequest } from "../api/auth"

const LoginPage = () => {

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const email = (e.currentTarget[0] as HTMLInputElement).value
    const password = (e.currentTarget[1] as HTMLInputElement).value

    const resLogin = await loginRequest(email, password)

    console.log(resLogin)
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