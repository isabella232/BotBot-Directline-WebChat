export const postMessageToServer = (
  botId,
  botConnection,
  userid,
  message,
  successCallback,
  failCallback
) => {
  const timeout = setTimeout(() => {
    if (typeof failCallback === 'function') {
      failCallback.apply(null, arguments);
    }
  }, 5000);

  botConnection
    .invoke('ReceiveMessage', userid, botId, message)
    .then(() => {
      clearTimeout(timeout);

      if (typeof successCallback === 'function') {
        successCallback.apply(null, arguments);
      }
    })
    .catch(() => {
      clearTimeout(timeout);

      if (typeof failCallback === 'function') {
        failCallback.apply(null, arguments);
      }
    });
};
