import { createPrismaClient } from '@/lib/prisma';

const prisma = createPrismaClient();

async function main() {
  console.log('🌱 Iniciando o seed do banco de dados...');

  const foodApp = await prisma.project.upsert({
    where: { slug: 'food-app' },
    update: {},
    create: {
      title: 'Food Explorer',
      slug: 'food-app',
      description: 'Uma aplicação completa para simulação de um restaurante/delivery. Desenvolvido com foco em front-end interativo e consumo de APIs.',
      githubUrl: 'https://github.com/Eduardo1Monteiro/FoodApp',
      liveUrl: 'https://food-app-brown-three.vercel.app/',
      tags: ['React', 'Next.js', 'Tailwind', 'API REST'],
      pinned: true,
      imageUrl: "../assets/Foodies.jpeg",
    },
  });

  const cpuSim = await prisma.project.upsert({
    where: { slug: 'risc-v-cpu' },
    update: {},
    create: {
      title: 'Simulador CPU RISC-V',
      slug: 'risc-v-cpu',
      description: 'Implementação de baixo nível de uma CPU baseada na arquitetura RISC-V. Projeto focado em arquitetura de computadores e processamento de instruções.',
      githubUrl: 'https://github.com/Eduardo1Monteiro/RISC-V_CPU',
      liveUrl: null,
      tags: ['C++', 'Assembly', 'Arquitetura de Computadores', 'Baixo Nível'],
      pinned: true,
      imageUrl: null,
    },
  });

  console.log(`✅ Projetos criados: ${foodApp.title}, ${cpuSim.title}`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
