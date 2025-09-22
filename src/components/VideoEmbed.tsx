interface VideoEmbedProps {
  embedCode: string;
}

export const VideoEmbed = ({ embedCode }: VideoEmbedProps) => {
  return (
    <div className="max-w-4xl mx-auto mb-12">
      <div 
        className="rounded-lg overflow-hidden shadow-lg"
        dangerouslySetInnerHTML={{ __html: embedCode }}
      />
    </div>
  );
};