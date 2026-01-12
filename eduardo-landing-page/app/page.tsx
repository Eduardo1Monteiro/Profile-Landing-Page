export default function Home() {
  return (
    <main className="flex min-h-screen w-full pl-6">
      <section id="sobre-mim" className="flex flex-col gap-4">
        <h1 className="font-bold text-4xl">
          Me chamo <span className="bg-linear-to-r from-purple-400 to-purple-950 bg-clip-text text-transparent">Eduardo Monteiro</span>
        </h1>
        <p className="text-xl ">
          Sou um desenvolvedor web e estudante do curso de Sistemas de Informação na Universidade Federal de Sergipe. <br />
          Na Universidade atuo não somente como aluno, mas também como pesquisador de projetos de iniciação científica. <br />
          Durante meu tempo de estudo desenvolvi desde de projetos de baixo nível como simuladores de cpu como também aplicações web como esta.
        </p>
      </section>
    </main>
  );
}
