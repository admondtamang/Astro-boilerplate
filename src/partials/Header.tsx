import ToggleDarkMode from '@/components/common/toggleDarkMode';

export default function Header() {
  return (
    <header className="body-font h-[10vh] text-gray-600 dark:text-white">
      <div className="container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row">
        <a
          href="/"
          className={` title-font mb-4 ml-3 flex items-center text-xl font-medium text-gray-900 dark:text-white md:mb-0`}
        >
          Admond
        </a>
        <nav className="flex flex-wrap items-center justify-center text-base md:mr-auto	md:ml-4 md:border-l md:border-gray-400 md:py-1 md:pl-4">
          <a href="projects" className="mr-5 hover:text-gray-900">
            Projects
          </a>
          <a href="posts" className="mr-5 hover:text-gray-900">
            Posts
          </a>
          <a href="beside" className="mr-5 hover:text-gray-900">
            Beside
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <ToggleDarkMode />
          <a href="/admond-cv.pdf" download>
            <button className="nue nue-button mt-4 flex items-center rounded border-0 py-1 px-3 text-base focus:outline-none md:mt-0">
              <span>View CV</span>
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="ml-1 h-4 w-4"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </a>
        </div>
      </div>
    </header>
  );
}
