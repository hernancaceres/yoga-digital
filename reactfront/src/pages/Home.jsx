
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import yogaImage1 from '../assets/yoga3.jpg';
import yogaImage2 from '../assets/yoga4.jpg';
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
        <h3 className="text-3xl  mb-4">Método Básico de Yoga Para El Desarrollo de las Potencialidades</h3>
        <img className="w-full h-auto rounded-lg" src={yogaImage1} alt="Yoga Integral Nivel 1" />
      </div>

      <div>
        <h1 className="text-2xl font-bold mb-4">Introducción al Método de Yoga: Equilibrio Interior</h1>
        <p className="mb-2">
          Bienvenido a tu espacio de bienestar y equilibrio interior.
        </p>
        <p className="mb-2">
          Este método de yoga está diseñado para guiar tu mente y cuerpo hacia un estado de armonía, fortaleciendo tanto tu físico como tu ser interior.
        </p>
        <p className="mb-2">
          Cada paso ha sido cuidadosamente seleccionado para proporcionarte una experiencia completa y revitalizante.
        </p>
        <p className="mb-2">
          Dedica este tiempo a ti mismo, sumérgete en el presente y deja que la energía positiva fluya a través de ti.
        </p>
        <img className="w-full h-auto rounded-lg" src={yogaImage2} alt="Introducción al Yoga" />
      </div>

      {/* Agrega las demás diapositivas con títulos, texto e imágenes correspondientes según sea necesario */}
    </Slider>
  );
};

export default Home;