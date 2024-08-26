import { Container, Filters, ProductsGroupList, Title, TopBar } from '@/shared/components/shared';
import { prisma } from '@/prisma/prisma-client';

export default async function Home() {
  const categories = await prisma.category.findMany({
    include: {
      products: {
        include: {
          variations: true,
          ingredients: true,
        },
      },
    },
  });

  // categories.map((category) => {
  //   console.log(category.name);
  //   console.log(category.products);
  // });
  // console.log(categories);

  return (
    <>
      <Container className="mt-10">
        <Title text="Alle Pizzas" size="lg" className="font-extrabold" />
      </Container>

      <TopBar categories={categories.filter((category) => category.products.length > 0)} />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[70px]">
          {/* Filtration */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* Produktliste */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {categories.map(
                (category) =>
                  category.products.length > 0 && (
                    <ProductsGroupList
                      key={category.id}
                      title={category.name}
                      categoryId={category.id}
                      items={category.products}
                    />
                  )
              )}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
