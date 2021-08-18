# Room_Meeting_Book
Rest Api Meeting Room Booking (Management Room Meeting) sederhana ini dibuat menggunakan bahasa pemrograman Node.js 

Masih banyak fitur yang belom terealisasikan karena waktu yang sangat terbatas seperti : Auth dengan menggunakan OAuth, Bermacam Role dan Scope User untuk melakukan booking, Bentuk / fasilitas ruangan ( jadi nanti akan ada ruangan A khusus untuk User dengan role,scope dan department apa saja ).

Ini merupakan beberapa Api yang sudah dibuat 
1. Get List Room 
localhost:3000/v1/reservation/room (method get)

2. Room Book (untuk membooking ruangan)
localhost:3000/v1/reservation/room/book/7 (method put)
dengan body :
{
    "status" : true,
    "user_id" : 2
}

3. Room Cancel (untuk melakukan pembatalan booking ruangan)
localhost:3000/v1/reservation/room/book/cancel/1 (method put)
dengan body : 
{
    "user_id" : 1,
    "status" : null
}
