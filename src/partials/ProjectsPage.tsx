import LinkButton from '@/components/common/linkButton';
import Highlight from '@/components/highlight';

const Projects = () => {
  const packages = [
    {
      name: 'pdf-watermark',
      description: 'Watermark PDF in node environment.',
      link: 'https://www.npmjs.com/package/pdf-watermark',
    },
    {
      name: 'multer-ftp',
      description: 'An custom engine for multer to directly send data to FTP.',
      link: 'https://www.npmjs.com/package/multer-ftp-storage',
    },
  ];
  const projects = [
    {
      name: 'Json feeder',
      description: 'Dynamic formbuilder.',
      link: 'https://jsonfeeder.vercel.app',
    },
    {
      name: 'IOS web',
      description: 'ios feel in web.',
      link: 'https://zen-engelbart-2de07e.netlify.app',
    },
    {
      name: 'Shippr',
      description: 'An ecommerce application.',
      link: 'https://next-shippr.vercel.app',
    },
    {
      name: 'God Api',
      description: 'Postman alternative for web.',
      link: 'https://godapi.vercel.app',
    },
  ];
  return (
    <div className="container mx-auto flex flex-col gap-10">
      <section>
        <h1 className="mb-4 font-bold"> Npm packages:</h1>

        <div className="flex flex-col gap-2">
          {packages.map((row, index) => (
            <LinkButton
              key={index}
              className="nue-button nue px-4 py-2 text-black dark:text-white"
              href="https://www.npmjs.com/package/pdf-watermark"
            >
              <Highlight> {row.name}</Highlight> - {row.description}
            </LinkButton>
          ))}
        </div>
      </section>

      <section>
        <h1 className="mb-4 font-bold"> Projects:</h1>
        <div className="grid grid-cols-4 gap-4 text-black dark:text-white">
          {projects.map((row, index) => (
            <LinkButton className="nue-button" href={row.link} key={index}>
              <b>{row.name}</b>

              <p> {row.description}</p>
            </LinkButton>
          ))}
        </div>
      </section>
    </div>
  );
};
export default Projects;
