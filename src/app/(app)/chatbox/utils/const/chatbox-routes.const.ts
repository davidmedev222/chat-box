export const enum Routes {
  NewChat = '/chatbox/new-chat',
  Chats = '/chatbox/chats',
  Search = '/chatbox/search',
  NewGroup = '/chatbox/new-group',
  StarredMessages = '/chatbox/starred-messages',
  NewCall = '/chatbox/calls/new-call',
  CallInfo = '/chatbox/calls/call-info',
  Settings = '/chatbox/settings',
  SettingsProfile = '/chatbox/settings/profile',
  SettingsAccount = '/chatbox/settings/account',
  SettingsChats = '/chatbox/settings/chats',
  SettingsNotifications = '/chatbox/settings/notifications',
  SettingsStorageData = '/chatbox/settings/storage-data',
  SettingsSecurity = '/chatbox/settings/security',
  SettingsHelpCenter = '/chatbox/settings/help-center',
  SettingsInviteFriends = '/chatbox/settings/invite-friends'
}

export const LinkRoutesOther = [
  { id: crypto.randomUUID(), href: Routes.NewGroup, title: 'New Group' },
  { id: crypto.randomUUID(), href: Routes.StarredMessages, title: 'Starred Messages' },
  { id: crypto.randomUUID(), href: Routes.Settings, title: 'Settings' }
]
