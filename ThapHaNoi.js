// Nguyễn Văn THành - KTPM - K17A
function HaNoi_tower(n,a,b,c) {
    if(n==1){
        console.log(a+"->"+c);
    }else{
        HaNoi_tower(n-1,a,c,b);
        HaNoi_tower(1,a,b,c);
        HaNoi_tower(n-1,b,a,c);
    }

}
HaNoi_tower(100,'A','B','C') 