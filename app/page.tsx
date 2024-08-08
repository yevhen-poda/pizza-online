import {
  Container,
  Filters,
  ProductCard,
  ProductsGroupList,
  Title,
  TopBar,
} from '@/components/shared';

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Alle Pizzas" size="lg" className="font-extrabold" />
      </Container>

      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[70px]">
          {/* Filtration */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* Produktliste */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Pizza"
                categoryId={1}
                items={[
                  {
                    id: 1,
                    name: 'Чизбургер-пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EF0286349B277780CB97A8544A6AEC.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: 'Чизбургер-пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EF0286349B277780CB97A8544A6AEC.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 3,
                    name: 'Чизбургер-пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EF0286349B277780CB97A8544A6AEC.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 4,
                    name: 'Чизбургер-пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EF0286349B277780CB97A8544A6AEC.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 5,
                    name: 'Чизбургер-пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EF0286349B277780CB97A8544A6AEC.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 6,
                    name: 'Чизбургер-пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EF0286349B277780CB97A8544A6AEC.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 7,
                    name: 'Чизбургер-пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EF0286349B277780CB97A8544A6AEC.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                ]}
              />

              <ProductsGroupList
                title="Combo"
                categoryId={2}
                items={[
                  {
                    id: 1,
                    name: 'Чизбургер-пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EF0286349B277780CB97A8544A6AEC.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: 'Чизбургер-пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EF0286349B277780CB97A8544A6AEC.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 3,
                    name: 'Чизбургер-пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EF0286349B277780CB97A8544A6AEC.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 4,
                    name: 'Чизбургер-пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EF0286349B277780CB97A8544A6AEC.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 5,
                    name: 'Чизбургер-пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EF0286349B277780CB97A8544A6AEC.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 6,
                    name: 'Чизбургер-пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EF0286349B277780CB97A8544A6AEC.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 7,
                    name: 'Чизбургер-пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EF0286349B277780CB97A8544A6AEC.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
