
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import yogaImage1 from '../assets/yoga1.jpg';
import yogaImage2 from '../assets/yoga2.jpg';
// import yogaImage3 from '../assets/yoga3.jpg';
// import yogaImage4 from '../assets/yoga4.jpg';
// Importa las demás imágenes según sea necesario

const Home = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...sliderSettings} className="rounded-lg p-8 ">
      <div>
        <h1 className="text-4xl font-bold mb-4">YOGA INTEGRAL NIVEL 1</h1>
        <h3>Método Básico de Yoga Para El Desarrollo de las Potencialidades</h3>
        <img className="w-full h-auto rounded-lg" src={yogaImage1} alt="Yoga Integral Nivel 1" />
      </div>

      <div>
        <h1 className="text-2xl font-bold mb-4">Introducción al Método de Yoga: Equilibrio Interior</h1>
        <p>
          Bienvenido a tu espacio de bienestar y equilibrio interior. Este método de yoga está diseñado para guiar tu mente y cuerpo hacia un estado de armonía, fortaleciendo tanto tu físico como tu ser interior. Cada paso ha sido cuidadosamente seleccionado para proporcionarte una experiencia completa y revitalizante. Dedica este tiempo a ti mismo, sumérgete en el presente y deja que la energía positiva fluya a través de ti.
        </p>
        <img className="w-full h-auto rounded-lg" src={yogaImage2} alt="Introducción al Yoga" />
      </div>

      {/* Agrega las demás diapositivas con títulos, texto e imágenes correspondientes según sea necesario */}
    </Slider>
  );
};

export default Home;





// import yogaImage1 from '../assets/yoga1.jpg';
// import yogaImage2 from '../assets/yoga2.jpg';
// import yogaImage3 from '../assets/yoga3.jpg';
// import yogaImage4 from '../assets/yoga4.jpg';
// // Importa las demás imágenes según sea necesario

// const Home = () => {
//   return (
//     <div className="rounded-lg p-8">
//       {/* Sección 1 */}
//       <section className="mb-8">
//         <h1 className="text-4xl font-bold mb-4">YOGA INTEGRAL NIVEL 1</h1>
//         <h3>Método Básico de Yoga Para El Desarrollo de las Potencialidades</h3>
//         {/* Agrega una imagen relacionada con esta sección */}
//         <img className="w-full h-auto rounded" src={yogaImage1} alt="Yoga Integral Nivel 1" />
//       </section>

//       {/* Sección 2 */}
//       <section className="mb-8">
//         <h1 className="text-2xl font-bold mb-4">Introducción al Método de Yoga: Equilibrio Interior</h1>
//         <p>
//           Bienvenido a tu espacio de bienestar y equilibrio interior. Este método de yoga está diseñado para guiar tu mente y cuerpo hacia un estado de armonía, fortaleciendo tanto tu físico como tu ser interior. Cada paso ha sido cuidadosamente seleccionado para proporcionarte una experiencia completa y revitalizante. Dedica este tiempo a ti mismo, sumérgete en el presente y deja que la energía positiva fluya a través de ti.
//         </p>
//         {/* Agrega una imagen relacionada con esta sección */}
//         <img className="w-full h-auto rounded" src={yogaImage2} alt="Introducción al Yoga" />
//       </section>

//       {/* Sección 3 */}
//       <section className="mb-8">
//         <h1 className="text-2xl font-bold mb-4">Introducción al Método de Yoga: Equilibrio Interior</h1>
//         <p>
//           Bienvenido a tu espacio de bienestar y equilibrio interior. Este método de yoga está diseñado para guiar tu mente y cuerpo hacia un estado de armonía, fortaleciendo tanto tu físico como tu ser interior. Cada paso ha sido cuidadosamente seleccionado para proporcionarte una experiencia completa y revitalizante. Dedica este tiempo a ti mismo, sumérgete en el presente y deja que la energía positiva fluya a través de ti.
//         </p>
//         {/* Agrega una imagen relacionada con esta sección */}
//         <img className="w-full h-auto rounded" src={yogaImage3} alt="Introducción al Yoga" />
//       </section>

//       {/* Sección 4 */}
//       <section className="mb-8">
//         <h1 className="text-2xl font-bold mb-4">Introducción al Método de Yoga: Equilibrio Interior</h1>
//         <p>
//           Bienvenido a tu espacio de bienestar y equilibrio interior. Este método de yoga está diseñado para guiar tu mente y cuerpo hacia un estado de armonía, fortaleciendo tanto tu físico como tu ser interior. Cada paso ha sido cuidadosamente seleccionado para proporcionarte una experiencia completa y revitalizante. Dedica este tiempo a ti mismo, sumérgete en el presente y deja que la energía positiva fluya a través de ti.
//         </p>
//         {/* Agrega una imagen relacionada con esta sección */}
//         <img className="w-full h-auto rounded" src={yogaImage4} alt="Introducción al Yoga" />
//       </section>

//       {/* Agrega las demás secciones con títulos, texto y las imágenes correspondientes según sea necesario */}
//     </div>
//   );
// };

// export default Home;




// const Home = () => {

//     return (
//         <div>
//             <h1>YOGA INTEGRAL NIVEL 1</h1>
//             <h3> Método Básico de Yoga Para El Desarrollo de las Potencialidades</h3>


//             <h1>Introducción al Método de Yoga: Equilibrio Interior</h1>
//             <p>
//                 Bienvenido a tu espacio de bienestar y equilibrio interior. Este método de yoga está diseñado para guiar tu mente y cuerpo hacia un estado de armonía, fortaleciendo tanto tu físico como tu ser interior. Cada paso ha sido cuidadosamente seleccionado para proporcionarte una experiencia completa y revitalizante. Dedica este tiempo a ti mismo, sumérgete en el presente y deja que la energía positiva fluya a través de ti.
//             </p>

//             <h1>Explorando el Yoga: Transformación a Través de la Conciencia</h1>
//             <p>El yoga es más que una serie de posturas y respiraciones; es un método, un medio, una tecnología que te permite redefinir quién eres. Considerado como un proceso, un método y una ciencia, el yoga es esencialmente una herramienta poderosa para desafiar y superar las limitaciones que llamamos personalidad. Se convierte en una vía de evolución, llevándote de ser simplemente una persona a convertirte en una presencia vibrante.
//             </p>

//             <h1>Descubriendo el Yoga como Proceso Transformador</h1>
//             <p>
//                 El yoga se presenta como un proceso dinámico que te invita a explorar y expandir tus límites internos. A través de la práctica constante, este antiguo arte te ofrece la posibilidad de trascender las fronteras autoimpuestas de la personalidad, permitiéndote descubrir nuevas dimensiones de tu ser.
//             </p>

//             <h1>Yoga como Método de Liberación Personal</h1>
//             <p>
//                 En su esencia, el yoga actúa como un método liberador, deshaciendo los patrones restrictivos que pueden haberse arraigado con el tiempo. Las asanas, las micromeditaciones y la atención plena se combinan para desatar las ataduras mentales y emocionales, permitiéndote florecer en tu auténtico yo.
//             </p>

//             <h1>La Tecnología del Yoga: Transformación Cuerpo-Mente</h1>
//             <p>
//                 Considera el yoga como una tecnología ancestral diseñada para transformar no solo tu cuerpo, sino también tu mente. A medida que te sumerges en las posturas, la respiración consciente y las meditaciones, experimentas una recalibración interna que mejora tu bienestar físico y mental.
//             </p>

//             <h1>Yoga como Ciencia de la Evolución Interior</h1>
//             <p>
//                 El yoga se erige como una ciencia, una exploración metódica de la evolución interna. Cada práctica es un experimento consciente destinado a desbloquear potenciales ocultos y elevar tu conciencia. Este enfoque científico te permite observar, comprender y transformar tu ser con una precisión cuidadosa.
//             </p>

//             <h1>Rompiendo las Limitaciones: De Persona a Presencia</h1>
//             <p>
//                 El yoga, en última instancia, busca trascender las limitaciones autoimpuestas. Rompe las barreras de la personalidad, llevándote de ser simplemente una persona concreta a convertirte en una presencia expansiva y consciente. Este proceso te invita a redescubrirte a ti mismo, abrazando la evolución continua como una expresión auténtica de tu ser.

//                 En resumen, el yoga es una práctica multifacética que no solo mejora la flexibilidad física, sino que también libera la mente y el espíritu. A través de su enfoque integral, el yoga te guía hacia una transformación profunda, allanando el camino para una existencia más plena y consciente.
//             </p>
//         </div>
//     );
// };

// export default Home;
