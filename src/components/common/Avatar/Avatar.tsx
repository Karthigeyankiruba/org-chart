import { AvatarContainer } from "./Avatar.styles";

interface AvatarProps {
  name?: string;
  imageUrl?: string;
  size?: string;
  className?: string;
}

const Avatar = ({ name, imageUrl, size = "48px", className }: AvatarProps) => {
  const getInitials = (name: string): string => {
    if (!name) return "NA";

    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <AvatarContainer $size={size} className={className}>
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={name || "Avatar"}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = "none";
            const container = target.parentElement;
            if (container && name) {
              container.textContent = getInitials(name);
            }
          }}
        />
      ) : (
        name && getInitials(name)
      )}
    </AvatarContainer>
  );
};

export default Avatar;
