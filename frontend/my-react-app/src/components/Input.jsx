// import "../App";

function Input() {
  return (
    <form className="box flex justify-between mt-10">
      <div className="form font-serif block">
        <h2 className="heading font-serif text-white">LOG IN</h2>
        <h3 className="heading font-serif text-white">Enter Email:</h3>
        <input type="email" name="" id="email" className="input" />
        <h4 className="heading font-serif text-white">Enter Password:</h4>
        <input type="password" name="" id="password" className="input" />
        <div>
          <button type="submit" className="btn">
            LOGIN
          </button>
        </div>
      </div>
      <img src="./src/assets/bottle.png" alt="bottle" className="img" />
    </form>
  );
}
export default Input;
