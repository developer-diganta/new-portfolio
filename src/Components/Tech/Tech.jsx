import React from 'react';

const techStacks = [
    { name: 'React', icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
    { name: 'Node.js', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png' },
    { name: 'Express', icon: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png' },
    { name: 'MongoDB', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/768px-MongoDB_Logo.svg.png?20190626143224' },
    { name: 'SQL', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Sql_data_base_with_logo.svg/768px-Sql_data_base_with_logo.svg.png?20231031073357' },
    { name: 'MinIO', icon: 'https://dl.min.io/logo/Minio_logo_light/Minio_logo_light.svg' },
    { name: 'Docker', icon: 'https://www.svgrepo.com/show/349342/docker.svg' },
    { name: 'Redis', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Logo-redis.svg/768px-Logo-redis.svg.png?20210820223643' },
    { name: 'Cassandra', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Cassandra_logo.svg/419px-Cassandra_logo.svg.png' },
    { name: 'JavaScript', icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
    { name: 'HTML', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/768px-HTML5_logo_and_wordmark.svg.png' },
    { name: 'CSS', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/544px-CSS3_logo_and_wordmark.svg.png' },
    { name: 'EJS', icon: 'assets/ejs.svg' },
    { name: 'Tailwind CSS', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
    { name: 'Bootstrap', icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg' },
    { name: 'GitHub', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg' },
    { name: 'Ubuntu', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/UbuntuCoF.svg/768px-UbuntuCoF.svg.png' },
    { name: 'Git', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/768px-Git-logo.svg.png?20160811101906' },
    { name: 'C++', icon: 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg' },
    { name: 'Jest', icon: 'assets/Jest.svg' },
    { name: 'Angular', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/768px-Angular_full_color_logo.svg.png' },
    { name: 'Webpack', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Webpack.svg/768px-Webpack.svg.png?20210415142115' },
    { name: 'Postman', icon: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Postman_%28software%29.png' },
    { name: 'Firebase', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Firebase.svg/96px-Firebase.svg.png' },
    { name: 'Redux', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Redux_Logo.png/1200px-Redux_Logo.png' },
    { name: 'React Native', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg' },
    { name: 'TypeScript', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/768px-Typescript_logo_2020.svg.png?20221110153201' },
    { name: 'DaisyUI', icon: 'https://daisyui.com/favicon.ico' },
    { name: 'Markdown', icon: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Markdown-mark.svg' },
    { name: 'Cypress', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/CyPress_logo.svg/1064px-CyPress_logo.svg.png?20100726080539' },
];

export default function TechStack() {
    return (
        <div className='flex flex-col items-center justify-center' id="tech">
            <div className="text-5xl text-center font-bold text-white mb-4">Tech Stack</div>
            <div className="flex justify-center mb-12">
                <div className="h-1 w-24 bg-accent rounded-full shadow-md" />
            </div>
            <div className="grid grid-cols-4 gap-6 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6">
                {techStacks.map((tech) => (
                    <div key={tech.name} className="relative w-24 h-24 group">
                        {/* Glow layer (slightly larger and blurred) */}
                        {/* <div
                            className="absolute inset-0 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-125"
                            style={{
                                background: '#4ADE80', // Your accent color
                                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                                zIndex: 0,
                                boxShadow: '0 0 15px rgba(74, 222, 128, 0.7)', // Glow effect
                            }}
                        /> */}

                        {/* Main hexagon layer */}
                        <div
                            className="absolute inset-0 bg-white flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
                            style={{
                                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                                zIndex: 10,
                            }}
                        >
                            <img
                                src={tech.icon}
                                alt={tech.name}
                                className="w-12 h-12 object-contain"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
