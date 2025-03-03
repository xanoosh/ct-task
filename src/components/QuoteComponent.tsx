interface QuoteComponentInterface {
  data: {
    text: string;
    author: string;
  };
}

export default function QuoteComponent({ data }: QuoteComponentInterface) {
  const { text, author } = data;
  return (
    <div>
      <h4>{text}</h4>
      <small>{author}</small>
    </div>
  );
}
