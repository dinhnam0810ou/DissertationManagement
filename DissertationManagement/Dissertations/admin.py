from django.contrib import admin
from .models import Dissertation, Council, Member, Target, User
from django.utils.html import mark_safe
# Register your models here.


class UserAdmin(admin.ModelAdmin):
    list_display = ['id', 'first_name', 'last_name', 'user_role']
    search_fields = ['first_name', 'last_name', 'user_role']
    readonly_fields = ['avatar']

    def avatar(self, user):
        return mark_safe('<img src="/static/{img_url}" width="120" />'.format(img_url=user.avatar.name))


admin.site.register(Dissertation)
admin.site.register(Council)
admin.site.register(Member)
admin.site.register(Target)
admin.site.register(User, UserAdmin)