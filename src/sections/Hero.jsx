import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 border-b border-gray-300">
      <h1 className="text-5xl md:text-7xl font-bold">Hi, I'm Akshat Patel</h1>
      <p className="mt-4 text-lg md:text-2xl max-w-2xl">
        A passionate Frontend Developer creating stunning and functional web experiences.
      </p>
      <div className="mt-6">
        <Link
          to="/projects"
          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold text-lg hover:bg-gray-200 transition"
        >
          View Projects
        </Link>
      </div>
    </section>
  );
};

export default Hero;
