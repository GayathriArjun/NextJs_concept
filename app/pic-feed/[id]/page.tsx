export default function DynamicPicroute({
    params,
  }: {
    params: { id: number };
  }) {
    return (
      params.id < 50 && (
        <h1>welcome to Dynamic route {params.id}</h1>
      )
    );
  }