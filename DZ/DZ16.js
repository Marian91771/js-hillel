function Student(sName, sSurname, sYear, sMarks){
    this.name = sName;
    this.surname = sSurname;
    this.year = sYear;
    this.marks = sMarks;

    this.age = new Date().getFullYear() - this.year;

    this.averageMark = this.marks.reduce((sum, num) => sum + num, 0) / this.marks.length;

    this.attendance = new Array(25);
    this.attendanceCount = 0;

    this.present = function(){
        if(this.attendanceCount < 25){
            this.attendance[this.attendanceCount] = true;
            this.attendanceCount++;
        } else {
            console.log('too mach attendances')
        }
    };

    this.absent = function(){
        if(this.attendanceCount < 25){
            this.attendance[this.attendanceCount] = false;
            this.attendanceCount++;
        } else {
            console.log('too mach attendances')
        }
    };

    this.summary = function(){
        let counts = 0;
        this.attendance.forEach(element => {
            if(element){
                counts++;
            }
        });
        
        if(this.averageMark > 90 && counts / this.attendanceCount > 0.9){
            console.log('Молодець!');
        } else if(this.averageMark > 90 || counts / this.attendanceCount > 0.9){
            console.log('Добре, але можна краще');
        } else if(this.averageMark <= 90 && counts / this.attendanceCount <= 0.9){
            console.log('Редиска!');
        }
    }
}

const ilon = new Student('Ilon', 'Mask', 1971, [100, 55, 90, 85, 70]);
ilon.present();
ilon.present();
ilon.present();
ilon.absent();
ilon.summary();
console.log(ilon);


const bill = new Student('Bill', 'Gates', 1955, [90, 90, 100]);
bill.present();
bill.absent();
bill.summary();
console.log(bill);

const stiv = new Student('Stiv', 'Jobs', 1955, [90, 90, 100]);
stiv.present();
stiv.summary();
console.log(stiv);