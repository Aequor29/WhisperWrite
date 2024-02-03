export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Whisp.WRITE",
	description: "Listen and Note",
	navItems: [
		
   
   
    {
      label: "About",
      href: "/about",
    }
	],
	navMenuItems: [
		{
			label: "Profile",
			href: "/profile",
		},
		{
			label: "Dashboard",
			href: "/dashboard",
		},
		{
			label: "Projects",
			href: "/projects",
		},
		{
			label: "Team",
			href: "/team",
		},
		{
			label: "Calendar",
			href: "/calendar",
		},
		{
			label: "Settings",
			href: "/settings",
		},
		{
			label: "Help & Feedback",
			href: "/help-feedback",
		},
		{
			label: "Logout",
			href: "/logout",
		},
	],
	links: {
		github: "https://github.com/Aequor29/WhisperWrite.git",
		docs: "https://baidu.com",
    sponsor: "https://patreon.com/jrgarciadev"
	},
};
