class c1<mano>
{
    mano a;
    void take(mano x)
    {
        a=x;
    }
    void show()
    {
        System.out.println(a);
    }
};

public class mano01
{
    public static void main(String []args)
    {
        c1 a;
        a.take(4);
        a.show();
    }
}