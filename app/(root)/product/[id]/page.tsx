import { notFound } from 'next/navigation';
import { prisma } from '@/prisma/prisma-client';
import {
  Container,
  GroupVariants,
  ProductImage,
  Title,
} from '@/shared/components/shared';

export default async function ProductPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const product = await prisma.product.findFirst({
    where: {
      id: Number(id),
    },
  });

  if (!product) {
    return notFound();
  }

  return (
    <Container className="flex flex-col my-10">
      <div className="flex flex-1">
        <ProductImage imageUrl={product.imageUrl} size={40} />

        <div className="p-7 w-[490px] bg-[#FCFCFC]">
          <Title
            text={product.name}
            size="md"
            className="mb-1 font-extrabold"
          />
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            nam laudantium sit atque consequatur quia tempore itaque illum!
            Ipsum nostrum deserunt ea mollitia illo. Inventore, fugiat. Sed
            explicabo sit ipsa.
          </p>

          <GroupVariants
            selectedValue={'2'}
            items={[
              { name: 'Klein', value: '1' },
              { name: 'Normal', value: '2' },
              { name: 'Groß', value: '3', disabled: true },
            ]}
          />
        </div>
      </div>
    </Container>
  );
}
