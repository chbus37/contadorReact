import HelloWorldApp from "./Title";
const nombre = ['Chino','Fernando','Herrera'];
const getString = () => {
    return "Hello World";
}
export default function FirstApp() {
    
  return (
    <>
      <HelloWorldApp title="Vegeta"/>
      <p>Lorem {5 + 5} dolor sit amet consectetur, adipisicing elit. Rerum laudantium laborum porro perferendis, consectetur numquam harum fugit dignissimos ipsam voluptas odit accusamus dicta veniam, animi sint culpa, repudiandae maiores quidem.</p>
      <button>{getString()}</button>
      <br />
      <input type="text" placeholder="Nombre" />
      <br />
      <input type="submit" value="Enviar de nuevo" />
    </>
  )
}
