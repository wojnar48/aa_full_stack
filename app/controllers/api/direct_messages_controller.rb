class Api::DirectMessagesController < ApplicationController
  before_action :require_login
  
  def index
    @chatrooms = current_user.chatrooms.where(private: true)
    render 'api/chatrooms/index'
  end

  def create
    @chatroom = Chatroom.new(name: 'private', private: true)

    if @chatroom.save
      @chatroom.chatroom_users.where(user_id: current_user.id).create

      chatroom_params.each do |user_id|
        user_id = user_id.to_i
        user = User.find(user_id)
        @chatroom.chatroom_users.where(user_id: user.id).create
      end

      @chatroom.update(name: @chatroom.users.map(&:username).join(', '))

      Pusher.trigger('dms', 'new-dm', {
        dm: {
          id: @chatroom.id,
          name: @chatroom.name,
          description: @chatroom.description,
          private: @chatroom.private,
          users: @chatroom.users
        }
      })

      render 'api/direct_messages/show'
    else
      render json: @chatroom.errors.full_messages, status: 422
    end
  end

  def destroy
    _dm = ChatroomUser.find_by(chatroom_id: params[:chatroom_id])
    _dm.destroy
    @chatroom = Chatroom.find(params[:chatroom_id])
    render 'api/direct_messages/show'
  end

  private

  def chatroom_params
    params.require(:chatroom)
  end
end
