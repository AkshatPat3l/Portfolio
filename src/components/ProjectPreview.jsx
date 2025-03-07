import React from 'react';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const ProjectCard = ({ title, description, image, link }) => {
  return (
    <Card className="shadow-lg hover:shadow-2xl transition" sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="200" image={image} alt={title} />
      <CardContent>
        <Typography variant="h5" component="div" fontWeight="bold">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" mt={1}>
          {description}
        </Typography>
        <Button
          href={link}
          variant="contained"
          sx={{ mt: 2, backgroundColor: "#3b82f6" }}
        >
          View Project
        </Button>
      </CardContent>
    </Card>
  );
};

const ProjectPreview = () => {
  const projectList = [
    {
      title: "Project One",
      description: "A brief description of the project goes here.",
      image: "https://via.placeholder.com/400",
      link: "#",
    },
    {
      title: "Project Two",
      description: "Another great project with cool features.",
      image: "https://via.placeholder.com/400",
      link: "#",
    },
    {
      title: "Project Three",
      description: "A brief description of this awesome project.",
      image: "https://via.placeholder.com/400",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="w-full py-20 bg-gradient-to-r from-purple-600 to-blue-500 text-white px-4 border-t border-gray-300">
      <div className="max-w-6xl mx-auto text-center">
        <Typography variant="h3" fontWeight="bold">
          Featured Projects
        </Typography>
        <Typography variant="h6" mt={2} maxWidth={600} mx="auto">
          A selection of my best work showcasing my frontend development skills.
        </Typography>
      </div>

      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projectList.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectPreview;
