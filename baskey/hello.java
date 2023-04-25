class mano<hello>
{
    hello h;
    void get(hello x)
    {
        h=x;
    }
    void put()
    {
        System.out.println(h);
    }
};

public class hello
{
    public static void main(String []args)
    {
        mano<String> m1=new mano<String>();
        m1.get("ranjan");
        m1.put();
        System.out.println("manoranjan baskey");
    }
}