import { mockUser } from '../data/mockData';

export default function Profile() {
  return (
    <div className="space-y-md max-w-4xl mx-auto">
      <div className="mb-md">
        <h1 className="font-display text-display text-on-surface mb-xs">Profile</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          Manage your account settings and preferences.
        </p>
      </div>
      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg shadow-sm flex items-center gap-md">
        <img src={mockUser.avatarUrl} alt={mockUser.name} className="w-20 h-20 rounded-full border border-outline-variant object-cover" />
        <div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">{mockUser.name}</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">{mockUser.role}</p>
        </div>
      </div>
    </div>
  );
}
