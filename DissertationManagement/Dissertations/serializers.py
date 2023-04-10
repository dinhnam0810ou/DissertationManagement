from rest_framework import serializers
from .models import User, Dissertation, Council, Target, Member


class MemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = ['id', 'member_role', 'score', 'user', 'council', 'target']


class TargetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Target
        fields = ['id', 'name']


class DissertationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dissertation
        fields = ['id', 'name', 'score', 'date', 'council', 'users']


class CouncilSerializer(serializers.ModelSerializer):
    class Meta:
        model = Council
        fields = ['id', 'name', 'created_date', 'finished_date', 'active', 'user']


class UserSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField(source='avatar')

    def get_image(self, obj):
        if obj.avatar:
            request = self.context.get('request')
            return request.build_absolute_uri('/static/%s' % obj.avatar.name) if request else ''

    def create(self, validated_data):
        data = validated_data.copy()
        u = User(**data)
        u.set_password(u.password)
        u.save()
        return u

    class Meta:
        model = User
        fields = ['id', 'first_name', 'last_name', 'username', 'password', 'avatar', 'image']
        extra_kwargs = {
            'avatar': {'write_only': 'True'},
            'password': {'write_only': 'True'}
        }