export default function RestaurantTitle({
  name,
}) {
  return (
    <div className='rtl mt-4 border-b pb-6'>
      <h1 className='font-bold text-6xl'>
        {name}
      </h1>
    </div>
  );
}
