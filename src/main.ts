import { initializeNestApp } from "./lambda";

declare const module: any;

async function bootstrap() {
  const nestApp = await initializeNestApp();
  await nestApp.listen(3000);
  console.log(`Application is running on: http://localhost:3000/graphql`);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => nestApp.close());
  }
}
bootstrap();
