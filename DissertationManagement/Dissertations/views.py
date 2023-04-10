from rest_framework import viewsets, generics, parsers, permissions, status
from rest_framework.decorators import action
from rest_framework.views import Response
from .serializers import UserSerializer, DissertationSerializer, CouncilSerializer, TargetSerializer, MemberSerializer
from .models import User, Council, Target, Member
# Create your views here.


class MemberViewSet(viewsets.ModelViewSet):
    queryset = Member.objects.all()
    serializer_class = MemberSerializer
    permission_classes = [permissions.IsAuthenticated, ]


class TargetViewSet(viewsets.ModelViewSet):
    queryset = Target.objects.all()
    serializer_class = TargetSerializer
    permission_classes = [permissions.IsAuthenticated, ]


class DissertationViewSet(viewsets.ModelViewSet):
    queryset = Council.objects.filter(active=True)
    serializer_class = DissertationSerializer
    permission_classes = [permissions.IsAuthenticated,]


class CouncilViewSet(viewsets.ViewSet, generics.CreateAPIView, generics.RetrieveAPIView, generics.DestroyAPIView):
    queryset = Council.objects.filter(active=True)
    serializer_class = CouncilSerializer

    def get_permissions(self):
        if self.action in ['create', 'retrieve']:
            return [permissions.IsAuthenticated()]
        return [permissions.AllowAny()]


class UserViewSet(viewsets.ViewSet, generics.CreateAPIView, generics.RetrieveAPIView, generics.ListAPIView):
    queryset = User.objects.filter(is_active=True)
    serializer_class = UserSerializer
    parser_classes = [parsers.MultiPartParser, ]

    def get_permissions(self):
        if self.action in ['current_user']:
            return [permissions.IsAuthenticated()]
        return [permissions.AllowAny()]

    @action(methods=['get', 'put'], detail=False, url_path='current-user')
    def current_user(self, request):
        u = request.user
        if request.method.__eq__('PUT'):
            for k, v in request.data.items():
                if k.__eq__('password'):
                    u.set_password(k)
                else:
                    setattr(u, k, v)
            u.save()

        return Response(UserSerializer(u, context={'request': request}).data)


