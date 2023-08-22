
const UserForm = () => {
  return (
    <div>
      <div className="form-control">
        <label>
          <span>Nome</span>
          <input type="text" name="name" id="name" required placeholder="Digite seu nome" />
        </label>
      </div>
      <div className="form-control">
        <label>
          <span>Email</span>
          <input type="email" name="email" id="email" required placeholder="Digite seu email" />
        </label>
      </div>
    </div>
  )
}

export default UserForm