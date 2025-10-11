import Image from 'next/image';

interface InfoBannerProps {
  imageSrc: string;
  title: string;
  description: string;
}

export default function InfoBanner({ imageSrc, title, description }: InfoBannerProps) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="relative h-64 w-full">
        <Image src={imageSrc} alt={title} fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
      </div>
      <div className="space-y-2 px-6 py-5">
        <h3 className="font-serif text-2xl text-brand">{title}</h3>
        <p className="text-sm text-brand-muted">{description}</p>
      </div>
    </div>
  );
}
