json.id @message.id
json.body @message.body
json.author @message.user.username
json.avatarUrl url_for(@message.user.avatar)
json.date @message.created_at
json.userId @message.user_id
json.chatroomId @message.chatroom_id
