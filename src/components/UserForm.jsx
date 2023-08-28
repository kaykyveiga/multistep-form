/* eslint-disable react/prop-types */

const UserForm = ({ data, updateFieldHandler }) => {
  return (
    <div>
      <div className="form-control">
        <label>
          <span>Nome</span>
          <input type="text" name="name" id="name"
            value={data.name || ""} onChange={(e) => updateFieldHandler("name", e.target.value)} required placeholder="Digite seu nome" />
        </label>
      </div>
      <div className="form-control">
        <label>
          <span>Email</span>
          <input type="email" name="email" id="email"
            value={data.email || ""} onChange={(e) => updateFieldHandler("email", e.target.value)} required placeholder="Digite seu email" />
        </label>
      </div>
    </div>
  )
}

export default UserForm