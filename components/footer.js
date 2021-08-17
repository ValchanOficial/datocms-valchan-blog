import Container from './container'

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-2xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            "What we know is a drop.. What we don't know is an ocean." - Isaac Newton
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://github.com/ValchanOficial/datocms-valchan-blog"
              className="font-bold hover:underline"
              title="Github" 
              target="_blank" 
              rel="nofollow, noreferrer, noopener, external"
            >
              GitHub
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
