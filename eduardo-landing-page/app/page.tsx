export default function Home() {

  return (
    <main className="flex flex-col gap-10 min-h-screen w-full pl-6">
      <section id="sobre-mim" className="flex flex-col gap-8">
        <h1 className="font-bold text-4xl">
          Me chamo <span className="bg-linear-to-r from-purple-400 to-purple-950 bg-clip-text text-transparent">Eduardo Monteiro</span>
        </h1>

        <p className="text-xl">
          Sou desenvolvedor web e estudante de Sistemas de Informação na Universidade Federal de Sergipe. <br />
          Na universidade, atuo não somente como aluno, mas também como pesquisador em projetos de iniciação científica. <br />
          Durante meu tempo de estudo, desenvolvi desde projetos de baixo nível, como simuladores de CPU, até aplicações web como esta. <br />
        </p>
      </section>

      <section id="projetos" className="mt-6 flex flex-col gap-6">
        <h1 className="font-bold text-4xl bg-linear-to-r from-purple-400 to-purple-950 bg-clip-text text-transparent">
          Projetos
        </h1>

        <div className="flex bg-linear-to-r from-white/10 to-transparent h-0.5 w-full"></div>

      </section>
    </main>
  );
}
