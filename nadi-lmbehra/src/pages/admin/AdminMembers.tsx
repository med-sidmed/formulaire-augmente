
import React, { useState } from 'react';
import AdminSidebar from '@/components/AdminSidebar';
import { Users, Plus, Edit, Trash2, Search, Filter, Mail, Phone } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

const AdminMembers = () => {
  const [members, setMembers] = useState([
    {
      id: 1,
      name: 'أحمد محمد',
      email: 'ahmed@example.com',
      phone: '+966501234567',
      joinDate: '2024-01-15',
      status: 'مفعل',
      membershipType: 'ذهبي'
    },
    {
      id: 2,
      name: 'فاطمة الأحمد',
      email: 'fatima@example.com',
      phone: '+966507654321',
      joinDate: '2024-01-10',
      status: 'مفعل',
      membershipType: 'فضي'
    },
    {
      id: 3,
      name: 'خالد السالم',
      email: 'khalid@example.com',
      phone: '+966509876543',
      joinDate: '2024-01-05',
      status: 'معلق',
      membershipType: 'برونزي'
    }
  ]);

  const [selectedMember, setSelectedMember] = useState(null);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [newMember, setNewMember] = useState({
    name: '',
    email: '',
    phone: '',
    membershipType: 'برونزي',
    status: 'مفعل'
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'مفعل': return 'bg-green-100 text-green-800';
      case 'معلق': return 'bg-yellow-100 text-yellow-800';
      case 'محظور': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleAddMember = () => {
    const member = {
      id: Date.now(),
      ...newMember,
      joinDate: new Date().toISOString().split('T')[0]
    };
    setMembers([...members, member]);
    setNewMember({ name: '', email: '', phone: '', membershipType: 'برونزي', status: 'مفعل' });
    setIsAddDialogOpen(false);
  };

  const handleEditMember = () => {
    setMembers(members.map(member => 
      member.id === selectedMember.id ? { ...selectedMember } : member
    ));
    setIsEditDialogOpen(false);
    setSelectedMember(null);
  };

  const handleDeleteMember = (id) => {
    setMembers(members.filter(member => member.id !== id));
  };

  const openEditDialog = (member) => {
    setSelectedMember({ ...member });
    setIsEditDialogOpen(true);
  };

  return (
    <div className="flex min-h-screen bg-gray-100" dir="rtl">
      <AdminSidebar />
      
      <div className="flex-1 p-8">
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">إدارة الأعضاء</h1>
              <p className="text-gray-600">إضافة وتعديل وإدارة أعضاء النادي</p>
            </div>
            <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
              <DialogTrigger asChild>
                <Button className="flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  إضافة عضو جديد
                </Button>
              </DialogTrigger>
              <DialogContent dir="rtl">
                <DialogHeader>
                  <DialogTitle>إضافة عضو جديد</DialogTitle>
                  <DialogDescription>
                    أدخل بيانات العضو الجديد
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">الاسم الكامل</Label>
                    <Input
                      id="name"
                      value={newMember.name}
                      onChange={(e) => setNewMember({...newMember, name: e.target.value})}
                      placeholder="أدخل الاسم الكامل"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">البريد الإلكتروني</Label>
                    <Input
                      id="email"
                      type="email"
                      value={newMember.email}
                      onChange={(e) => setNewMember({...newMember, email: e.target.value})}
                      placeholder="أدخل البريد الإلكتروني"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">رقم الهاتف</Label>
                    <Input
                      id="phone"
                      value={newMember.phone}
                      onChange={(e) => setNewMember({...newMember, phone: e.target.value})}
                      placeholder="أدخل رقم الهاتف"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>نوع العضوية</Label>
                    <Select value={newMember.membershipType} onValueChange={(value) => setNewMember({...newMember, membershipType: value})}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="برونزي">برونزي</SelectItem>
                        <SelectItem value="فضي">فضي</SelectItem>
                        <SelectItem value="ذهبي">ذهبي</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex gap-2">
                    <Button onClick={handleAddMember}>إضافة العضو</Button>
                    <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>إلغاء</Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Search and Filter */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="البحث عن عضو..."
                    className="pr-10"
                  />
                </div>
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">جميع الأعضاء</SelectItem>
                  <SelectItem value="active">مفعل</SelectItem>
                  <SelectItem value="suspended">معلق</SelectItem>
                  <SelectItem value="banned">محظور</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Members Table */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              قائمة الأعضاء ({members.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>الاسم</TableHead>
                  <TableHead>البريد الإلكتروني</TableHead>
                  <TableHead>الهاتف</TableHead>
                  <TableHead>نوع العضوية</TableHead>
                  <TableHead>تاريخ الانضمام</TableHead>
                  <TableHead>الحالة</TableHead>
                  <TableHead>الإجراءات</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {members.map((member) => (
                  <TableRow key={member.id}>
                    <TableCell className="font-medium">{member.name}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-gray-400" />
                        {member.email}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-gray-400" />
                        {member.phone}
                      </div>
                    </TableCell>
                    <TableCell>{member.membershipType}</TableCell>
                    <TableCell>{member.joinDate}</TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(member.status)}>
                        {member.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => openEditDialog(member)}
                          className="flex items-center gap-1"
                        >
                          <Edit className="h-3 w-3" />
                          تعديل
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleDeleteMember(member.id)}
                          className="flex items-center gap-1 text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="h-3 w-3" />
                          حذف
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Edit Dialog */}
        <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
          <DialogContent dir="rtl">
            <DialogHeader>
              <DialogTitle>تعديل بيانات العضو</DialogTitle>
              <DialogDescription>
                تعديل بيانات {selectedMember?.name}
              </DialogDescription>
            </DialogHeader>
            {selectedMember && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="edit-name">الاسم الكامل</Label>
                  <Input
                    id="edit-name"
                    value={selectedMember.name}
                    onChange={(e) => setSelectedMember({...selectedMember, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="edit-email">البريد الإلكتروني</Label>
                  <Input
                    id="edit-email"
                    type="email"
                    value={selectedMember.email}
                    onChange={(e) => setSelectedMember({...selectedMember, email: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="edit-phone">رقم الهاتف</Label>
                  <Input
                    id="edit-phone"
                    value={selectedMember.phone}
                    onChange={(e) => setSelectedMember({...selectedMember, phone: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label>نوع العضوية</Label>
                  <Select value={selectedMember.membershipType} onValueChange={(value) => setSelectedMember({...selectedMember, membershipType: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="برونزي">برونزي</SelectItem>
                      <SelectItem value="فضي">فضي</SelectItem>
                      <SelectItem value="ذهبي">ذهبي</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>الحالة</Label>
                  <Select value={selectedMember.status} onValueChange={(value) => setSelectedMember({...selectedMember, status: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="مفعل">مفعل</SelectItem>
                      <SelectItem value="معلق">معلق</SelectItem>
                      <SelectItem value="محظور">محظور</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex gap-2">
                  <Button onClick={handleEditMember}>حفظ التغييرات</Button>
                  <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>إلغاء</Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-green-600">{members.filter(m => m.status === 'مفعل').length}</p>
                <p className="text-sm text-gray-600">أعضاء مفعلون</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-yellow-600">{members.filter(m => m.status === 'معلق').length}</p>
                <p className="text-sm text-gray-600">أعضاء معلقون</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-600">{members.length}</p>
                <p className="text-sm text-gray-600">إجمالي الأعضاء</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminMembers;
