import userStore from "../store/UserStore";

export const simulateUserActivity = () => {
  setInterval(() => {
    const randomUserId = Math.floor(Math.random() * userStore.users.length) + 1;

    // случайное появление пользователя онлайн
    const isOnline = Math.random() > 0.5;
    userStore.setUserOnline(randomUserId, isOnline);

    // случайное событие "Печатает..."
    const isTyping = isOnline && Math.random() > 0.7;
    userStore.setTypingStatus(randomUserId, isTyping);

    // Если пользователь печатает, увеличить количество непрочитанных сообщений
    if (isTyping) {
      setTimeout(() => {
        userStore.incrementUnreadMessages(randomUserId);
      }, 3000)

    }
  }, 3000);
};
